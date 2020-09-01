import fetch from "isomorphic-unfetch";
import { API_URL } from "../../assets/constants";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  petName: string;
  petWeight: number;
  idealPetWeight: number;
}

const logError = response => {
  // Usually, we'd log this message to a 3rd part logging service
  console.log(`Error - API call: ${new Date()}`);
  console.log(response);
};

export default async (req, res) => {
  const {
    email,
    password,
    confirmPassword,
    petName,
    petWeight,
    idealPetWeight,
  }: FormData = req.body;

  const userData = {
    email,
    password,
    confirmPassword,
    petName,
    petWeight,
    idealPetWeight,
  };

  const checkStatus = response => {
    if (response.status === 500) {
      const error = new Error(response.statusText);
      error["response"] = response;
      return Promise.reject(error);
    }

    return response;
  };

  let result;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then(checkStatus);

    result = { status: response.status };
  } catch (error) {
    logError(error);
    result = { status: 500 };
  }

  res.json(result);
};
