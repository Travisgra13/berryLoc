

let app = new Vue({
  el: '#code',
  data: {
    code:'',
    clickedTitle:'',
    markerIsClicked: false
  },
  methods: {
    addNewCode() {
      let ref = locationRef.child(this.clickedTitle);//.reference().child("Locations").child(this.clickedTitle);
      
      ref.update({
        "Code": this.code
      });
    }
  },
 
});
//onChildChangeListener

