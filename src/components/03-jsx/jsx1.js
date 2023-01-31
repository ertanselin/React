import React from "react";

const Jsx1 = () => {
  return (
    <header>
      <div>
        Header yerine React.Fragment yazarsak DOM oluşturulduğunda HTML'de
        parent olarak hiç bir şey gözükmez. Ya da içi boş HTML tagları
        oluşturabiliriz.{" "}
      </div>
      <div>Herşey bir şeyin içinde olmalıdır.</div>
      <div className="title">
        Class isimleri className içinde verilir ve attribute lar camelCase
        olarak yazılır.
      </div>
    </header>
  );
};

export default Jsx1;
