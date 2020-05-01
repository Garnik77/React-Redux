
import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts :[
        {id: 1, message: 'Hi, how are you', likesCount:12},
        {id: 2, message: 'It is my first post',likesCount:17},
        {id: 3, message: 'huhuhauhau',likesCount:17},
        {id: 4, message: 'mmkmkmkm',likesCount:17},
    ]
};

it('length of post should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("karmir");

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
   expect (newState.posts.length ).toBe(5);
   expect (newState.posts[4].message ).toBe("karmir");
});

it('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("karmir");

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect (newState.posts[4].message ).toBe("karmir");
});

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect (newState.posts.length ).toBe(3);
});

it('after deleting length of messages should be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect (newState.posts.length ).toBe(4);
});