import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { listPackages } from '../actions/packageActions';

function SearchBox() {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const keyword = params.get('keyword');
        if (keyword) {
          dispatch(listPackages(keyword));
        }
      }, [dispatch, window.location.search]);
      

  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log("Keyword:", keyword); // This should log the keyword to the console
      if (keyword.trim()) {
        navigate(`/Premade Packages/?keyword=${keyword.trim()}`);
      } else {
        navigate('/');
      }
    };

  
    return (
      <Form inline onSubmit={submitHandler}>
        <Form.Control
          type="text"
          name="q"
          placeholder="Search..."
          onChange={(e) => setKeyword(e.target.value)}
          className="mr-2"
        />
        <Button type="submit" variant="outline-success" className="p-2">
          Submit
        </Button>
      </Form>
    );
  }
  
export default SearchBox;
