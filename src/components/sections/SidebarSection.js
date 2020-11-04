import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import FolderItem from '../FolderItem'
import DefaultContext from '../context/DefaultContext'
import PropTypes from 'prop-types';

class SidebarSection extends Component {
    static contextType = DefaultContext;
    getFolderList = () => {
        if(typeof this.props.store !== "object" || this.props.history.location.pathname.includes("/note") ) return;
        return this.props.store.folderes.map( folder => {
            return (
                <FolderItem
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}
                    store={this.props.store}
                />
            );
        });
    }
    getBottomButton = () => {
        if(!this.props.history.location.pathname.includes("/note") ) {
            return (
                <Link
                    to={`/add-folder/`}
                    className="folder--item--add">

                    Add Folder
                    
                
            </Link>);
        }
        return (<Link
                     to={`/`}
                    className="button--back"
                    >
                    
                     Go back  
                </Link>

            );
    }
}

SidebarSection.propTypes = {
    store: PropTypes.object.isRequired
}

export default withRouter(SidebarSection);