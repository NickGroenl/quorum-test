
import React, { FunctionComponent } from "react";
import * as Icon from 'react-feather';
import "./index.css";
  
  type UserCard = {
    image: string;
    title: string;
  };
  const CardVotation: FunctionComponent<UserCard> = ({title, image }) => {
    return (
      <div className="card-votation ">
        <div className="card-votation-container">
            <h1>{title}</h1>
            <p> +10 personas votaron</p>

        </div>
        <button>
          <Icon.ArrowRight color='white'/>
        </button>
        
      </div>
    );
  };
  
  export default CardVotation;