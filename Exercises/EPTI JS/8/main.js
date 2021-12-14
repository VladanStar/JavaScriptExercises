person = {FirstName:"Vladan",

         ShowName1() {
            console.log(this.name)

        }    
        };
      


person.ShowName = function (){
   console.log(this.FirstName)
}
person.ShowName();