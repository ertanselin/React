import React from 'react'

const Events = () => {
    // Parametre göndermek istiyorsak tek çözüm satır 20
    // Event Handler
    const sayHello1 = () => {
        alert("Hello");
    };

    const sayHello2 = (name) => {
        alert(`Hello ${name}`);
    };

  return (
    <div>
        {/* Event handler parametresiz kullanılacaksa aşağıdaki gibi fonksiyon kullanmadan çağrılabilir.*/}
        <div onClick={sayHello1}>Say Hello</div>        
       
        {/* Eğer handler a parametre gönderilecekse aşağıdaki gibi fonksiyn kullanmak zorunludur.*/}
        <div onClick={() => sayHello2("Ali")}>Say Hello</div> 

    </div>
  )
}

export default Events