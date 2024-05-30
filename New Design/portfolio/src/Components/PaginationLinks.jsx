import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Pagination.css';

const Pagination = ({ nextPage, prevPage }) => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate(nextPage);
  };


  const handlePrevPage = () => {
    navigate(prevPage);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} className="pagination-buttonSecond">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button onClick={handleNextPage} className="pagination-button">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Pagination;
