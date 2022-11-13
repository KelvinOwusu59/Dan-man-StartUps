import axios from "axios";
import * as types from "./actionTypes";
// let usertoken = JSON.parse(localStorage.getItem("token")) || "";
<<<<<<< HEAD
<<<<<<< HEAD

let userData = JSON.parse(localStorage.getItem("userdata")) || [];
let usertoken = userData.token;

export const getaddcartdata = () => dispatch => {
=======
var usertoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNmE3MjNkOWU3OTFhNTViN2M2NmZlMSIsImVtYWlsIjoiYWJoaXNoZWtAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoiYWJoaXNoZWsiLCJsYXN0bmFtZSI6ImFkaXR5YSIsInBhc3N3b3JkIjoiJDJiJDA0JFE1anBwWS5JOUdreXBLWmNiNC9DTXVDekJweDZWMUI1ckIzUXdwZTlvYTAwalE3NDhQRXh5IiwiZG9iIjoiMjQtMDItMjAwMyIsImludGVyZXN0Ijoid29tZW53ZWFyIiwiX192IjowfSwiaWF0IjoxNjY4MjYzNjg3fQ.FJjvmyg1IwYnAkWYj6-z8-t8l2v4Wu3GhmMfziQwO7k";
=======

<<<<<<< HEAD
let userData= JSON.parse(localStorage.getItem('userdata'))||[]
let usertoken =userData.token;
>>>>>>> dcab2db (Cart page Added)
=======
let userData = JSON.parse(localStorage.getItem("userdata")) || [];
let usertoken = userData.token;
>>>>>>> b032edd (addtocartstyling complte)

export const getaddcartdata = () => (dispatch) => {
>>>>>>> 7de8bd9 (addtocart)
  dispatch({ type: types.GET_CARTDATA_REQUEST });

  return axios
    .get("https://asos-backend.onrender.com/cart", {
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
    .then((r) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
     
=======
      console.log(r.data.data);
>>>>>>> 7de8bd9 (addtocart)
=======
      console.log("amol:",r.data.data);
>>>>>>> dcab2db (Cart page Added)
=======
      console.log("amol:", r.data.data);
>>>>>>> b032edd (addtocartstyling complte)
      dispatch({ type: types.GET_CARTDATA_SUCCESS, payload: r.data.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_CARTDATA_FAIL });
    });
};
export const deletecartdata = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CARTDATA_REQUEST });
  return axios
    .delete(`https://asos-backend.onrender.com/cart/${id}`, {
      headers: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
        "Content-Type": "application/json",
>>>>>>> 7de8bd9 (addtocart)
=======
>>>>>>> dcab2db (Cart page Added)
        Authorization: `Bearer ${usertoken}`,
      },
    })
    .then((r) => {
      dispatch({ type: types.DELETE_CARTDATA_SUCCESS, payload: id });
    })
    .catch((err) => dispatch({ type: types.DELETE_CARTDATA_FAIL }));
};
export const updatecartdata = (el, id) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_REQUEST });
  return axios
    .patch(`https://asos-backend.onrender.com/cart/${id}`, el, {
      headers: {
        Authorization: `Bearer ${usertoken}`,
      },
    })
    .then((r) => {
<<<<<<< HEAD
    
      // getaddcartdata();
      dispatch({ type: types.UPDATE_CART_SUCCESS, payload: { el, id } });
=======
      console.log(r);
      getaddcartdata();
      dispatch({ type: types.UPDATE_CART_SUCCESS });
>>>>>>> 7de8bd9 (addtocart)
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.UPDATE_CART_FAIL });
    });
};
<<<<<<< HEAD

export const CleanCart=()=>dispatch=>{
  return axios
  .delete(`https://asos-backend.onrender.com/cart/deleteall/cartdata`,{
    headers: {
      Authorization: `Bearer ${usertoken}`,
    },
  }).then((re)=>{
    getaddcartdata()
  })
}
=======
>>>>>>> 7de8bd9 (addtocart)
