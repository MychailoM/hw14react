import React, { Component } from 'react';
import { useId } from 'react';
import css from './App.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import * as Yup from "yup";

const date = [];

const push = () => {
  date.push(initialValues);
  console.log(date)
}

const initialValues = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  coment: "",
  check: false,
  radio: "",
  select: "",
};

const App = () => {
  const checkboxId = useId();
  const radioId = useId();

  const onSubmit = (values, { resetForm }) => {    
    resetForm();
  };

  return (
    <div className={css.container}>
      <div className={css.formBox}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className={css.form}>
            <div>
              <h2 className={css.detailsTitle}>Деталі замовлення</h2>
              <div className={css.detailsBox}>
                <Field
                  className={css.detailsInput}
                  name="name"
                  placeholder="Ім'я *"
                  type="text"
                />
                <Field
                  className={css.detailsInput}
                  name="surname"
                  placeholder="Прізвище *"
                  type="text"
                />
                <Field
                  className={css.detailsInput}
                  name="phone"
                  placeholder="Телефон *"
                  type="tel"
                />
                <Field
                  className={css.detailsInput}
                  name="email"
                  placeholder="Пошта *"
                  type="email"
                />
              </div>
              <h2 className={css.comentTitle}>Коментар до замовлення</h2>
              <Field
                className={css.comentField}
                as="textarea"
                rows="5"
                name="coment"
                placeholder="коментар до замовлення"
              />
              <div>
                <Field
                  className={css.check}
                  id={checkboxId}
                  type="checkbox"
                  name="check"
                />
                <label className={css.checkText} htmlFor={checkboxId}>
                  Мені можна не телефонувати після замовлення
                </label>
              </div>

              <h2 className={css.deliveryTitle}>Доставка</h2>
              <div>
                <Field
                  className={css.radio}
                  value="nova"
                  id={radioId}
                  type="radio"
                  name="radio"
                />
                <label className={css.radioText} htmlFor={radioId}>
                  Нова пошта
                </label>
              </div>

              <Field className={css.choice} as="select" name="select">
                <option value="">Оберіть область</option>
                <option value="Київська">Київська</option>
                <option value="Чернівецька">Чернівецька</option>
                <option value="Львівська">Львівська</option>
                <option value="Чернігівська">Чернігівська</option>
                <option value="Вінницька">Вінницька</option>
              </Field>
            </div>
            <div className={css.buttonWrap}>
              <div className={css.sumContainer}>
                <h3 className={css.sum}>СУМА:</h3>
                <h3 className={css.sumNum}>4500ГРН</h3>
              </div>
              <button className={css.button} onClick={push} type="submit">
                Підтвердити замовлення
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className={css.productCard}>
        <h2 className={css.productTitle}>Товар</h2>

        <div className={css.productInfoWrap}>
          <img src={"/photo_2025-07-26_12-47-39.jpg"} alt="product" />
          <div className={css.productInfo}>
            <h2 className={css.productName}>
              Срібна підвіска Дзвіночок більший (чорний)
            </h2>
            <h3 className={css.product}>
              <span className={css.productInfoType}>РОЗМІР: </span>ОДИН РОЗМІР
            </h3>
            <h3 className={css.product}>
              <span className={css.productInfoType}>ЦІНА: </span>4500 ГРН.
            </h3>
            <h3 className={css.product}>
              <span className={css.productInfoType}>КІЛЬКІСТЬ: </span>1
            </h3>
            <h3 className={css.product}>
              <span className={css.productInfoType}>СУМА: </span>4500 ГРН.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


