const BASE_URL="https://playground.4geeks.com/contact/agendas/"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			fetchAgenda:async () => {
				try {
					const response=await fetch(`${BASE_URL}juanespinoh`)
					if(!response.ok && response.status===404){
						// throw new Error(response.status)
						const response=await fetch(`${BASE_URL}juanespinoh`,{method:"POST"})
						const data=await response.json()
						setStore({...getStore(),contactList:data.contacts})
						
						return
					} 

					const data=await response.json()
					setStore({...getStore(),contactList:data.contacts})
					return 

				} catch (error) {
					console.log(error)
				}
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
