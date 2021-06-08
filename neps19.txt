const obj = [{"tam": 40, "pe": "D"}, {"tam": 42, "pe": "E"}, {"tam": 40, "pe": "E"}, {"tam": 42, "pe": "D"}, {"tam": 42, "pe": "E"}, {"tam": 40, "pe": "D"}, {"tam": 41, "pe": "D"}];
let cont = 0;

for(var i of obj){
  for(var j of obj){
  	if(i != j){
			if(i.tam == j.tam){
  			if(i.pe != j.pe){
        	cont++;
          obj.splice(i, 1);
          obj.splice(j, 1);
        }
  		}
  	}
  }
}
 console.log(cont);