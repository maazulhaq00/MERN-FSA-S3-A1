import React from 'react';
import './AddCategory.css';  // Import the custom CSS file

function AddCategory() {
    return ( 
        <>
        <div className="container">

            <div className="form-wrapper">
                <form>
                    <div className="form-group">
                        <label htmlFor="cname">Category Name</label>
                        <input type="text" id="cname" placeholder="Enter category name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cdesc">Category Description</label>
                        <input type="text" id="cdesc" placeholder="Enter category description" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-btn">Add Category</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default AddCategory;
