import ApiClient from "./ApiClient";

export function getPopularCategories(){
    return ApiClient.get('/ISOT/popular-categories/');
}

export function searchSkills(searchQuery){
    return ApiClient.get('/ISOT/?q='+searchQuery);
}

export function childrenSkills(file_id){
    return ApiClient.get('/ISOT/children/?id='+file_id);
}

export function treeSkills(file_id){
    console.log("file_is",file_id)
    return ApiClient.get('/ISOT/tree/?id='+file_id);
}