<template>
    <!--  -->
    <!-- Modal -->
    <div class="modal modal-xl fade" id="update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ anime.name }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                <input class="form-control" type="text" name="editType{{index}}" id="editType{{index}}"
                                    value="${item.type}" />
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
                                <input class="form-control" type="text" name="editPic{{index}}" id="editPic{{index}}"
                                    value="${item.picture}" />
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
                                <input class="form-control" type="text" name="editBath{{index}}" id="editBath{{index}}"
                                    value="${item.bathrooms}" />
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
</template>

<script>
export default {

}
</script>

<style>
</style>
