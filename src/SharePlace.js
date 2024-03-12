import { Modal } from './UI/Modal.js';
import { Map } from './UI/Map.js';
import {
  getCoordsFromAddress,
  getAddressFromCoords,
} from './Utility/Location.js';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');
    this.shareBtn = document.getElementById('share-btn');
    // this.shareBtn.disabled = false;

    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));
    // --OR--
    // locateUserBtn.addEventListener('click', () => {
    //   this.locateUserHandler();
    // });

    this.shareBtn.addEventListener('click', this.sharePlaceHandler.bind(this));
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
  }

  // -----HANDLING PERMISSIONS IN THE NAVIGATOR OBJECT.
  // report(state) {
  //   console.log('Permission: ' + state);
  // }

  // handlePermission() {
  //   navigator.permissions.query({ name: 'clipboard-write' }).then(function (result) {
  //     if (result.state == 'granted') {
  //       this.report(result.state);
  //     } else if (result.state == 'prompt') {
  //       this.report(result.state);
  //     } else if (result.state == 'denied') {
  //       this.report(result.state);
  //     }
  //     result.onchange = function () {
  //       this.report(result.state);
  //     };
  //   });
  // }
  // --------------------END----------------------------------------------

  // ------A FIX FOR THE PROBLEM WITH 'navigator.clipboard' API's 'readText' and 'writeText' methods
  readClipboardFromDevTools(value) {
    console.log('Starting coping and pasting process...');
    return new Promise((resolve, reject) => {
      const _asyncCopyFn = async () => {
        try {
          await navigator.clipboard.writeText(value);
          const readValue = await navigator.clipboard.readText();
          alert(`${readValue} is read!`);
          resolve(readValue);
        } catch (e) {
          reject(e);
        }
        window.removeEventListener('focus', _asyncCopyFn);
      };

      window.addEventListener('focus', _asyncCopyFn);

      console.log(
        'Hit <Tab> to give focus back to document (or we will face a DOMException);'
      );
    });
  }
  // -------------------------END-------------------------------------------------

  sharePlaceHandler() {
    const shareLinkInputElement = document.getElementById('share-link');
    if (!navigator.clipboard) {
      shareLinkInputElement.select();
      console.log('Unable to copy to clipboard!')
      return;
    }
    // --------LECTURE CODE THAT DID'NT WORK FOR ME--------
    // navigator.clipboard
    //   .writeText(shareLinkInputElement.value)
    //   .then((result) => {
    //     alert(`Copied to clipboard! - ${result}`);
    //   })
    //   .catch((error) => {
    //     alert(`Something went wrong - ${error}`);
    //     shareLinkInputElement.select();
    //   });
    // ------------------END-----------------------------

    // ----------A WORK-AROUND/FIX-------------------
    this.readClipboardFromDevTools(shareLinkInputElement.value);
    // -------------------END---------------------------
  }

  selectPlace(coordinates, address) {
    // --------------Dynamically import 'Map.js'---------------
    // import('./UI/Map.js').then((mapImport) => {
    //   if (this.map) {
    //     this.map.render();
    //   } else {
    //     this.map = new mapImport.Map(coordinates);
    //   }
    // });
    // ---------------------END-----------------------------------------
    if (this.map) {
      this.map.render();
    } else {
      this.map = new Map(coordinates);
    }
    fetch('http://localhost:3000/add-location', {
      method: 'POST',
      body: JSON.stringify({
        address: address,
        lat: coordinates.lat,
        lng: coordinates.lng,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const locationId = data.locId;
        this.shareBtn.disabled = false;
        const shareLinkInputElement = document.getElementById('share-link');
        shareLinkInputElement.value = `${location.origin}/my-place?location=${locationId}`;
      });
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location feature is not available in your browser - please use a more modern browser or input your location manually'
      );
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location... Please wait'
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      async (successResult) => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        const address = await getAddressFromCoords(coordinates);
        modal.hide();
        this.selectPlace(coordinates, address);
      },
      (error) => {
        modal.hide();
        alert(
          'User could not be located automatically, Please enter an address manually'
        );
      }
    );
  }

  // findAddressHandler(event) {
  //   event.preventDefault();
  //   const address = event.target.querySelector('input').value;
  //   if (!address || address.trim().length == 0) {
  //     alert('Invalid address entered - Please try again');
  //     return;
  //   }
  //   const modal = new Modal(
  //     'loading-modal-content',
  //     'Loading location... Please wait'
  //   );
  //   modal.show();
  //   import('./Utility/Location.js').then(async function (location) {
  //     console.log(location);
  //     try {
  //       const coordinates = await location.getCoordsFromAddress(address);
  //       this.selectPlace(coordinates);
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   });
  //   modal.hide();
  // }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    if (!address || address.trim().length == 0) {
      alert('Invalid address entered - Please try again');
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading location... Please wait'
    );
    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (error) {
      alert(error.message);
    }
    modal.hide();
  }
}

const placeFinder = new PlaceFinder();
