window.addEventListener("DOMContentLoaded", async (event) => {
    console.log("La página cargo correctamente.");

    const URL = "https://jsonplaceholder.typicode.com/users";
    const $list = document.getElementById("list");


    console.log($list);

    try {
        const data = await fetch(URL);
        const res = await data.json();
        console.log(res);

        const elementList = res.map((item, index) => {
            const $item = `<article class="contact">
                <article class="contact_personal_data">
                    <p>Nombre: <span> ${item.name}</span></p>
                    <p>Correo: <span>${item.email}</span></p>
                </article>
                <article class="contact_extra_information">
                    <p>Dirección: <span> ${item.address.street} | ${item.adress.suite}</span></p>
                    <p>Teléfono: <span> ${item.phone}</span></p>
                </article>
            </article>`;

            return $item;

        });

        $list.innerHTML = elementList.join("");

    } catch (error) {
        console.log(`Error en la API ${error}`)
    }


    // Another way to use async function with 'fetch method' 
    // fetch(URL).then((data) => {
    //     data.json().then((res) => {
    //         console.log(res);
    //     });
    // }).catch((error) => {
    //     console.log(`Error en la API ${error}`)
    // })
});

// //A callback function is a function passed as an argument to another function. So, this function is nested into another function, and it wil be
// // used only when the main fuction is used.

// // Here, we are defining a function with a callback as an argument
// function helloName(name, personalizedHello = () => { }) {
//     console.log(`Hola ${name}`);
//     personalizedHello(); // Call to the callback
// }

// // Using the function without a personalized callback
// helloName("Dante");

// // Using the function with a personalized callback
// helloName("Dante", () => {
//     console.log("Espero que tengas un gran día. ")
// });