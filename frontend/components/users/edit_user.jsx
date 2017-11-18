import React from 'react';
import { Link } from 'react-router-dom';

class EditUser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.username);
  }

  render() {
    return (
      <main className="edit-page-container" >
        <div className="edit-page" >

          <article className>

          </article>

          <article className="user-info">

            <div className="fullname-edit">

            </div>

            <div className="bio-edit">

            </div>
          </article>

        </div>
      </main>
    )
  }


}

export default EditUser;
