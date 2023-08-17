import {apiCall } from "./api.hook";
import Cookie from 'universal-cookie';
import { getStore, setUserStore, userInitialState } from "../store/user.slice";
import { NavigateFunction } from "react-router-dom";
import { ThunkDispatch, CombinedState, AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";




export const createUser = async (
  body: Object
) => {
  try {
    const response: any = await apiCall("/user/create", "post", 
    {
      ...body
    }
    );
    if(response.user != null){
      return response.password ?? '';
    } else return '';
  } catch (error) {
    return '';
  }
};


export const loginUser = async (email: string, password: string, dispach: any) => {
    
  try{
      const cookies = new Cookie();
      const response: any = await apiCall("/user/login", "post", {email, password});
      console.log(response);
      if(response.user !== undefined){
          cookies.set('access_token', response.token, { path: '/' })
          response.user.login = true;
          await dispach(setUserStore(response?.user));
          return true;
      } else return false;
  }
  catch(error){
      return false;
  }
}




export const GetUserData = async (dispatch: any) => {
  const cookies = new Cookie();
  const token: string = await cookies.get('access_token');
  if(token?.length > 6) {
      try{
          const response: any = await apiCall("/user/get", "get"); 
          if(response?.user){
              response.user.login = true;
              await dispatch(setUserStore(response?.user));
              return true;
              
          } else{
              
              await dispatch(setUserStore(userInitialState));
              return false;
          }
      }
      catch(error){
          return false;
      }
  } else {
    return false;
  }
}

export const GetUserclients = async (id: String) => {
  const cookies = new Cookie();
  const token: string = await cookies.get('access_token');
  if(token?.length > 6) {
      try{
          const response: any = await apiCall("/user/getclients", "post", {id});
          if(response?.clients){
              return response?.clients;
          } else{
              return null;
          }
      }
      catch(error){
        return null;
      }
  }
}

export const getUserById = async (id: String) => {
  const cookies = new Cookie();
  const token: string = await cookies.get('access_token');
  if(token?.length > 6) {
      try{
          const response: any = await apiCall("/user/getuserid", "post", {id});
          if(response?.user){
              return response?.user;
          } else{
              return null;
          }
      }
      catch(error){
        return null;
      }
  }
}


export const GetUserMedicals = async (id: string) => {
  const cookies = new Cookie();
  const token: string = await cookies.get('access_token');
  if(token?.length > 6) {
      try{
          const response: any = await apiCall("/user/getmedicals", "post", {id});
          if(response?.medical){
             
              return response?.medical;
          } else{
              return null;
          }
      }
      catch(error){
        return null;
      }
  }
}

export const ResetDealerPassword = async (id: String) => {
  const cookies = new Cookie();
  const token: string = await cookies.get('access_token');
  if(token?.length > 6) {
      try{
          const response: any = await apiCall("/dealers/updatepassword", "post", {_id: id});
          
          if(response?.password){
              return response?.password;
          } else{
              return null
          }
      }
      catch(error){
        return null;
      }
  }
}

export const moveSimDealers = async (from: string, to: string, ammount: any) => {
  try{
      const response: any = await apiCall("/dealers/movesims", "post", {from, to, ammount});
      if(response?.ammount !== undefined){
            return true;
      } else return false;
  }
  catch(error){
      return false;
  }
}


export const moveCreditsDealer = async (from: string, to: string, ammount: any) => {
  try{
      const response: any = await apiCall("/dealers/movecredits", "post", {from, to, ammount});
      if(response?.ammount !== undefined){
            return true;
      } else return false;
  }
  catch(error){
      return false;
  }
}


export const getHistoriesMovements = async () => {
  try{
      const response: any = await apiCall("/dealers/gethistories", "get");
      if(response.histories !== undefined){
            return response.histories;
      } else return false;
  }
  catch(error){
      return false;
  }
}






export const updateUser = async (body: Object) => {
  try {
    const response: any = await apiCall("/user/update", "post", {
      ...body
    });
    if(response.user != null){
      return true
    } else return false;
  } catch (error) {
    return '';
  }
};