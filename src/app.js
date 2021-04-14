import { LightningElement } from "lwc";

export default class App extends LightningElement {

  fullName = ''
  inputEventFirst;
  inputEventLast;

  handleChange(event) {
    if (event.target.name == 'first')
      this.inputEventFirst = event.target.value;
    else
      this.inputEventLast = event.target.value;
  }
  
  submit() {
    var input = this.template.querySelectorAll("lightning-input");
    input.forEach(function(element){
      if (element.name == "first")
        this.first = element.value;
      else if (element.name == "last")
        this.last = element.value;
    }, this);

    this.fullName = this.first + ' ' + this.last;
  }

}
