<template>
  <h2>user: {{user.name}}</h2>
 <!-- <main>
        <section id="Animes">
            <div class="container text-center my-2">
                <h2>Animes</h2>
                <div class="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Released</th>
                                <th scope="col">Episodes</th>
                                <th scope="col">Seasons</th>
                                <th scope="col">Status</th>
                                <th scope="col">Alternative Names</th>
                                <th scope="col">
                                    <a class="btn" id="btnSort">
                                        <i class="fa-solid fa-arrow-down-a-z"></i>
                                    </a>

                                    <a data-bs-toggle="modal" data-bs-target="#addnew" class="btn"><i
                                            class="fa-regular fa-square-plus"></i>
                                    </a>
                                </th>
                            </tr>
                        </thead>
                        <tbody id="tbody">

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </main> -->


    <!-- Modal -->
    <!-- <div class="modal fade" id="addnew" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        Add product
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <div class="mb-3">
                                <label for="addTitle" class="form-label">Title</label>
                                <input class="form-control" type="text" name="addTitle" id="addTitle"
                                    placeholder="Enter Title" required />
                            </div>

                           
                           <div class="mb-3">
                                <label for="addDescription" class="form-label">Description</label>
                                <input class="form-control" type="text" name="addDescription" id="addDescription"
                                    placeholder="Enter Description" required />
                            </div>

  
                            <div class="mb-3">
                                <label for="addGenre" class="form-label">Genre</label>
                               <input class="form-control" type="text" name="addGenre" id="addGenre"
                                    placeholder="Enter Genre" required />
                            </div>

                            
                            <div class="mb-3">
                                <label for="addPicture" class="form-label">Picture</label>
                                <input class="form-control" type="text" name="addPicture" id="addPicture" />
                            </div>
                        </div>

                        <div class="col-6"> -->
                            <!-- bedrooms -->
                            <!-- <div class="mb-3">
                                <label for="addRooms" class="form-label">Bedrooms</label>
                                <select class="form-select" name="addRooms" id="addRooms">
                                    <option value="">Bedrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div> -->

                            <!-- bathrooms -->
                            <!-- <div class="mb-3">
                                <label for="addBathrooms" class="form-label">Bathrooms</label>
                                <select class="form-select" name="addBathrooms" id="addBathrooms">
                                    <option value="">Bathrooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div> -->

                            <!-- garage -->
                            <!-- <div class="mb-3">
                                <label for="addGarage" class="form-label">Garage Space</label>
                                <select class="form-select" name="addGarage" id="addGarage">
                                    <option value="">Garage Spaces</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div> -->

                            <!-- price -->
                            <!-- <div class="mb-3">
                                <label for="addPrice" class="form-label">Price</label>
                                <input class="form-control" type="text" name="addPrice" id="addPrice"
                                    placeholder="Enter Price" required />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="addItem()">
                            Add Property
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    -->
</template>

<script>

export default {
methods: {

},

computed: {
    // returns value from store
    user(){
        return this.$store.state.user
    },
},
}
</script>

<style>

</style>