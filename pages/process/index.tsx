import React from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist", // unique key for localStorage (or sessionStorage) key
  storage: localStorage, // default is localStorage
});

// Define the atom


const Index = () => {
  const [formState, setFormState] = useRecoilState(formStateAtom);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const nextStep = () => {
    setFormState((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
  };

  return (
    <div>
      <h1>Multi-step Form</h1>
      {formState.step === 1 && (
        <div>
          <h2>Step 1</h2>
          <label>
            Name:
            <input
              name="name"
              value={formState.formData.name}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {formState.step === 2 && (
        <div>
          <h2>Step 2</h2>
          <label>
            Email:
            <input
              name="email"
              value={formState.formData.email}
              onChange={handleInputChange}
              type="email"
            />
          </label>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {formState.step === 3 && (
        <div>
          <h2>Step 3</h2>
          <label>
            Comment:
            <textarea
              name="comment"
              value={formState.formData.comment}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={nextStep}>Finish</button>
        </div>
      )}
    </div>
  );
};

export default Index;
