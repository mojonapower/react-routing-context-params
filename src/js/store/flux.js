import simon from "../../img/simon.png"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tareasSeba:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personas:[
				{nombre:'Macarena', img:'https://scontent.fscl25-1.fna.fbcdn.net/v/t1.6435-9/40511517_10217640879071726_4105837900019531776_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=SUgx-azqd_gAX-hUgWk&_nc_ht=scontent.fscl25-1.fna&oh=00_AT_-ePVJr1ODeF-imrrpFclgibi-vr5y6c-IVfvsP6VU_g&oe=627E9A42',
				edad:26,
				hobby: 'Lost Ark'},
		
				{nombre:'Simon',
				img:simon,
				edad:2,
				hobby: 'Meterme en bolsas de papel'}
			]

		},
		actions: {
			alerta: function(){
				alert("Fetch realizado satisfactoriamente");
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
				const actions= getActions()
				fetch("https://assets.breatheco.de/apis/fake/todos/user/seba")
				.then(response => response.json())
				.then(result => {
					
					setStore({tareasSeba:result})
				})
				.catch(error => console.log('error', error));
				console.log(getStore())
				actions.alerta()
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
