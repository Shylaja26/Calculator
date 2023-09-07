let outputScreen = document.getElementById("value");

      function display(num) {
        outputScreen.value += num;
      }

      function Clear() {
        outputScreen.value = "";
      }

      function del() {
        outputScreen.value = outputScreen.value.slice(0, -1);
      }

      function calculate() {
        try {
          outputScreen.value = eval(outputScreen.value);
        } catch (err) {
          alert("Invalid");
        }
      }