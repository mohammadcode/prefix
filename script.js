document.getElementById('phoneNumber').addEventListener('input', function() {
      const phoneNumber = this.value;
      const firstFourDigits = phoneNumber.substring(0, 4);
      const body = document.body;
      const container = document.querySelector('.container');
      const input = document.querySelector('input');
      const image = document.getElementById('operatorImage');
  
      const mciPrefixes = ['0910', '0911', '0912', '0913', '0914', '0915', '0916', '0917', '0918', '0919', '0991', '0990', '0992', '0993'];
      const irancellPrefixes = ['0930', '0933', '0935', '0936', '0937', '0938', '0939', '0901', '0902', '0903', '0904', '0905', '0941'];
      const rightelPrefixes = ['0921', '0922', '0923'];
  
      if (mciPrefixes.includes(firstFourDigits)) {
          body.style.backgroundColor = '#54c5d0';
          container.style.backgroundColor = '#fff';
          input.style.borderColor = '#54c5d0';
          image.src = '1.png';
      } else if (irancellPrefixes.includes(firstFourDigits)) {
          body.style.backgroundColor = '#ffcb05';
          container.style.backgroundColor = '#333333';
          input.style.borderColor = '#ffcb05';
          image.src = '2.png';
      } else if (rightelPrefixes.includes(firstFourDigits)) {
          body.style.backgroundColor = '#a72b77';
          container.style.backgroundColor = '#fff';
          input.style.borderColor = '#a72b77';
          image.src = '3.png';
      } else {
          body.style.backgroundColor = '#fff';
          container.style.backgroundColor = '#fff';
          input.style.borderColor = '#ff0000';
          image.src = '';
      }
  });