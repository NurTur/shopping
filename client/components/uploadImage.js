import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { SetIMAGE } from "../store/actions/productImage";



class UploadImage extends React.Component {

    onFileSelected(event) {
        event.preventDefault();
        const selectedFile = event.target.files[0];
        let image = new Image();
        const reader = new FileReader();
        reader.onload = (e) => {
            image = e.target.result;
            if ((selectedFile.size / 1024) > 1000) {
                let info = false;
                this.props.SetIMAGE({ selectedFile, image, info });
            }
            else {
                let info = true;
                this.props.SetIMAGE({ selectedFile, image, info });
            }
        };
        reader.readAsDataURL(selectedFile);
    };


    removeImage(event) {
        event.preventDefault();
        this.props.SetIMAGE({ selectedFile: null, image: false });

    }

    render() {
        const { image, selectedFile, info } = this.props.UploadImage;

        return (<div id="imageUpload">
            <div className="imageHeader">
                <input
                    type="file"
                    id="image_uploads"
                    name="image_uploads"
                    accept=".jpg, .jpeg, .png"
                    onChange={this.onFileSelected.bind(this)}

                />
                <label htmlFor="image_uploads">Choose images to upload (PNG, JPG)</label>
            </div>

            <div className="imageMain">
                <div className="text">
                    {image === false ? <p>No files selected</p> :
                        (info ? (<div><p>File name: {selectedFile.name}</p><p>File name: {(selectedFile.size / 1024).toFixed(2)} KB</p></div>) :
                            <p style={{ color: "red" }}>Please, select image less than 20 KB </p>)}
                </div>
                <div className="image">
                    {image && <img className="imageView" src={image} />}
                </div>

            </div>
            <div className="imageFooter">
                <button className="imageButton" onClick={this.removeImage.bind(this)}>Remove image</button>
            </div>
        </div >
        );
    }
}


export default connect(state => ({ UploadImage: state.UploadImage }),
    dispatch => bindActionCreators({ SetIMAGE }, dispatch))(UploadImage);
