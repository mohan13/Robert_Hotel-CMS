import React, { useState } from "react";
// import { Schema } from "../Schema/Schema";
import { FormDatas } from "./FormData";
import { Formik, Form, Field, ErrorMessage } from "formik";
const Form1 = () => {
  const [Images, setImages] = useState([]);
  return (
    <div className="lg:w-5/6 md:w-4/5 mx-auto">
      <h1 class="sm:text-3xl text-2xl font-medium title-font my-4 text-gray-900">
        Contact Us
      </h1>
      <Formik
        initialValues={{
          title: "",
          image: "",
        }}
        onSubmit={async (values) => {
          alert("Sucessfull !");
          console.log(values);
          try {
            console.log(values);
            let formData = new FormData();
            formData.append("title", values.title);
            formData.append("image", values.image);

            // Images.map((val, i) => {
            //   formData.append("image", val);
            // });
            axios
              .post("http://localhost:5000/anotherForm", formData)
              .then((res) => {
                console.log(res);
              });
          } catch (error) {
            console.log(error);
          }
        }}
        // validationSchema={Schema}
        render={({ handleSubmit, setFieldValue, values }) => {
          return (
            <div className=" bg-white flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
              <Form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 border p-4 gap-8"
              >
                {FormDatas?.map((val, i) => {
                  return (
                    <div key={i}>
                      <label class="leading-7 text-sm text-gray-600">
                        {val.label}
                      </label>
                      <Field
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        type={val.type}
                        name={val.name}
                      />
                      <ErrorMessage
                        className="text-red-500"
                        name={val.name}
                        component="div"
                      />
                    </div>
                  );
                })}
                <div className="flex">
                  <div>Enter Single Images</div>
                  <input
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files[0], values);
                      setFieldValue("image", e.target.files[0]);
                    }}
                  />
                </div>
                {/* <label>
                  {Images.map((val, i) => {
                    return (
                      <img
                        src={URL.createObjectURL(val)}
                        style={{
                          height: 100,
                          width: 150,
                        }}
                      />
                    );
                  })}
                </label>
                <div>Enter Multiple Images</div>
                <input
                  type="file"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => {
                    console.log(e.target.files[0], values);
                    setImages([...Images, e.target.files[0]]);
                  }}
                /> */}
                <button
                  type="submit"
                  class="flex mr-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </Form>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Form1;
