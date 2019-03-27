import UpdateProducts from "../services/updateProducts";
import DeleteImages from "../services/deleteImages";

const onUpdateProducts = async (obj) => {
    try {
        const result = await UpdateProducts(obj);
        console.log(result);
    }
    catch (err) { console.log(err); }
}

const onDeleteImages = async (arr) => {
    try {
        const result = await DeleteImages(arr);
        console.log(result);
    }
    catch (err) { console.log(err); }
}

export default function HandleProducts(Products, User) {
    let arr = [...Products];
    let deleteImageArr = [];
    let z = 0;
    let x = 0;

    Products.forEach((e, i) => {
        if (e._IdUser === User._id) {
            if (User.products.some((d) => d.Date === e.Date) === false) {
                arr.splice(i - z, 1);
                z++;
                if (e.productImage.slice(0, 4) !== "dist") { deleteImageArr.push(e.productImage); }
            }
        }
    });

    User.products.forEach((e, i) => {
        if (Products.some((d) => d._IdUser === e._IdUser && d.Date === e.Date) === false) {
            arr.unshift(e);
            x++;
        }
    });

    if (z > 0) { onDeleteImages(deleteImageArr); }
    if (z > 0 || x > 0) {
        onUpdateProducts({ _id: User._id, products: User.products });
        return { test: true, arr };
    } else {
        return { test: false, arr: [] };
    }
}
