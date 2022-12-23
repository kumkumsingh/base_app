import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Species } from '../../interfaces/Species'
import api from '../../api';

// Get details of species
export const getAllSpecies = createAsyncThunk<Species[]>("species/getAllSpecies", async (_, thunkAPI ) => {
     try{
        const response = await api.get("projects/3/species");
        return response.data;
     }
     catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
})

interface SpeciesState {
    allSpecies: Species[] | null;
    loading: boolean;
    error: any;
}
// Initial state for species list
const initialState = {
    allSpecies: [],
    loading: false,
    error: ""
} as SpeciesState

// Action has to be of type PayloadAction and PayloadAction is of type Species[]
const speciesSlice = createSlice({
    name: "allSpecies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllSpecies.pending, (state) => {
            state.loading = true;
        })
            .addCase(getAllSpecies.fulfilled, (state, action: PayloadAction<Species[]>) => {
                state.loading = false;
                state.allSpecies = action.payload
            })
            .addCase(getAllSpecies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})
// State has to be of type Root and its good to take like this so in case of any changes , you need to change here not in all the components.
export const getAllAvailableSpecies = (state: RootState) => state.species.allSpecies;

export default speciesSlice.reducer;