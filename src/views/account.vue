<template>
    <h2>user: {{ user.name }}</h2>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Anime Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">
                        <a data-bs-toggle="modal" data-bs-target="#addnew" class="btn">
                            <i class="fa-regular fa-square-plus"></i>
                        </a>
                    </th>
                </tr>
            </thead>
            <tr v-for="(anime) in animes" :key="anime.id">
                <td>{{ anime.id }}</td>
                <td>{{ anime.name }}</td>
                <td>{{ anime.genre }}</td>

                <!-- icons -->
                <td>
                    <!-- Update -->
                    <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#update"><i
                            class="fa-solid fa-pen-to-square"></i></a>

                    <!-- Delete -->
                    <a class="btn" id="delete" @click="$store.dispatch('deleteAnime', anime.id)"><i
                            class="fa-solid fa-trash-can"></i></a>
                </td>


                <!--  -->
                <!-- Modal -->
                <div class="modal modal-xl fade" id="update" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{{ anime.name }}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-6">
                                        <!-- Address -->
                                        <div class="mb-3">
                                            <label for="editTitle{{index}}" class="form-label">Address</label>
                                            <input class="form-control" type="text" name="editTitle{{index}}"
                                                id="editTitle{{index}}" value="${item.address}" />
                                        </div>

                                        <!-- Type -->
                                        <div class="mb-3">
                                            <label for="editType{{index}}" class="form-label">Type</label>
                                            <input class="form-control" type="text" name="editType{{index}}"
                                                id="editType{{index}}" value="${item.type}" />
                                        </div>

                                        <!-- Location -->
                                        <div class="mb-3">
                                            <label for="editLocation{{index}}" class="form-label">Location</label>
                                            <input class="form-control" type="text" name="editLocation{{index}}"
                                                id="editLocation{{index}}" value="${item.location}" />
                                        </div>

                                        <!-- picture -->
                                        <div class="mb-3">
                                            <label for="editPic{{index}}" class="form-label">Picture</label>
                                            <input class="form-control" type="text" name="editPic{{index}}"
                                                id="editPic{{index}}" value="${item.picture}" />
                                        </div>
                                    </div>

                                    <div class="col-6">
                                        <!-- bedrooms -->
                                        <div class="mb-3">
                                            <label for="editRooms{{index}}" class="form-label">Bedrooms</label>
                                            <input class="form-control" type="text" name="editRooms{{index}}"
                                                id="editRooms{{index}}" value="${item.bedrooms}" />
                                        </div>

                                        <!-- bathrooms -->
                                        <div class="mb-3">
                                            <label for="editBath{{index}}" class="form-label">Bathrooms</label>
                                            <input class="form-control" type="text" name="editBath{{index}}"
                                                id="editBath{{index}}" value="${item.bathrooms}" />
                                        </div>

                                        <!-- garage -->
                                        <div class="mb-3">
                                            <label for="editGarage{{index}}" class="form-label">Garage Space</label>
                                            <input class="form-control" type="text" name="editGarage{{index}}"
                                                id="editGarage{{index}}" value="${item.garage}" />
                                        </div>

                                        <!-- price -->
                                        <div class="mb-3">
                                            <label for="editPrice{{index}}" class="form-label">Price</label>
                                            <input class="form-control" type="text" name="editPrice{{index}}"
                                                id="editPrice{{index}}" value="${item.price}" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onclick="updateProperty({{index}})" class="btn btn-primary"
                                    data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  -->
            </tr>
        </table>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="addnew" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Add Anime
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <!-- name -->
                            <div class="mb-3">
                                <label for="addName" class="form-label">Name:</label>
                                <input class="form-control" type="text" name="addName" id="addName"
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

                        <div class="col-6">
                            <!-- image gif -->
                            <div class="mb-3">
                                <label for="addGif" class="form-label">Image Gif</label>
                                <input class="form-control" type="text" name="addImage" id="addType"
                                    placeholder="Add Image Gif" />
                            </div>

                            <!-- desc -->
                            <div class="mb-3">
                                <label for="addDesc" class="form-label">Description</label>
                                <textarea name="addDesc" id="addDesc" cols="30" rows="10"></textarea>
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
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addItem()">
                            Add Anime
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
</template>

<script>

export default {
    methods: {

    },
    mounted() {
        this.$store.dispatch("getAnimes")
    },

    computed: {
        animes() {
            return this.$store.state.animes
        },
        // returns value from store
        user() {
            return this.$store.state.user
        },
    },
}
</script>

<style>
</style>