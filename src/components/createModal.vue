<template>
    <div class="modal fade" id="addnew" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Add Anime
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row w-100">
                        <div class="col-4">
                            <!-- name -->
                            <div class="mb-3">
                                <label for="addName" class="form-label">Name:</label>
                                <input class="form-control" type="text" v-model="name" name="addName" id="addName"
                                    placeholder="Enter Name:" required />
                            </div>

                            <!-- image -->
                            <div class="mb-3">
                                <label for="addImage" class="form-label">Image</label>
                                <input class="form-control" type="text" name="addImage" id="addType" />
                            </div>

                            <!-- Alternate title -->
                            <div class="mb-3">
                                <label for="addAlternate" class="form-label">Alternate</label>
                                <input class="form-control" type="text" name="addAlternate" id="addAlternate" />
                            </div>

                            <!-- desc-image -->
                            <div class="mb-3">
                                <label for="addImage_desc" class="form-label">Image Description</label>
                                <input class="form-control" type="text" name="addImage_desc" id="addImage_desc"
                                    placeholder="Add Image" />
                            </div>
                        </div>

                        <div class="col-4">
                            <!-- image gif -->
                            <div class="mb-3">
                                <label for="addGif" class="form-label">Image Gif</label>
                                <input class="form-control" type="text" name="addImage" id="addType"
                                    placeholder="Add Image Gif" />
                            </div>

                            <!-- desc -->
                            <div class="mb-3">
                                <label for="addDesc" class="form-label">Description</label>
                                <textarea class="form-control" name="addDesc" id="addDesc" cols="30"
                                    rows="10"></textarea>
                            </div>

                            <!-- episodes -->
                            <div class="mb-3">
                                <label for="addEp" class="form-label">Episodes</label>
                                <input class="form-control" type="number" name="addEp" id="addEp"
                                    placeholder="episode count" />
                            </div>

                            <!-- season -->
                            <div class="mb-3">
                                <label for="addSeason" class="form-label">Seasons</label>
                                <input class="form-control" type="text" name="addSeason" id="addSeason"
                                    placeholder="Enter Price" required />
                            </div>
                        </div>
                        <!-- genre, status, studio, aired -->
                        <div class="col-4">
                            <!-- genre -->
                            <div class="mb-3">
                                <label for="addGenre" class="form-label">Add Genre</label>
                                <input class="form-control" type="text" name="addGenre" id="addGenre"
                                    placeholder="Add Genres" />
                            </div>

                            <!-- status -->
                            <div class="mb-3">
                                <label for="addStatus" class="form-label">Status</label>
                                <input class="form-control" type="number" name="addStatus" id="addStatus"
                                    placeholder="Status" />
                            </div>

                            <!-- studio -->
                            <div class="mb-3">
                                <label for="addStudio" class="form-label">Studio</label>
                                <input class="form-control" type="number" name="addStudio" id="addStudio"
                                    placeholder="Studio" />
                            </div>

                            <!-- aired -->
                            <div class="mb-3">
                                <label for="addDate" class="form-label">Date:</label>
                                <input class="form-control" type="text" name="addDate" id="addDate"
                                    placeholder="Enter Date" required />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            @click="$store.dispatch('addAnime')">
                            Add Anime
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
props: ['anime']
}
</script>

<style>
</style>