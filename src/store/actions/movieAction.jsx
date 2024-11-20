export {removemovie} from "../reducer/movieSlice"
import axios from "../../utills/axioss";
import { loadmovie } from "../reducer/movieSlice";


export const asyncloadmovie = (id) => async(dispatch, getstate) => {
    try {
        const detail= await axios.get(`/movie/${id}`);
        const externalid= await axios.get(`/movie/${id}/external_ids`);
        const recomendations= await axios.get(`/movie/${id}/recomendations`);
        const similar= await axios.get(`/movie/${id}/similar`);
        const videos= await axios.get(`/movie/${id}/videos`);
        const watchprovider= await axios.get(`/movie/${id}/watch/providers`);
        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recomendations: recomendations.data.results,
            similar: similar.data.results,
            videos: videos.data.results.find(m => m.type === "Trailer"),
            watchprovider: watchprovider.data,
        }
        dispatch(loadmovie(theultimatedetails));
        console.log(theultimatedetails);

    } catch (error) {
        console.log("Error", error);
    }
};
    
