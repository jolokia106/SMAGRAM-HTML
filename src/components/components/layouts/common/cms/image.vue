<style lang="scss" scoped>
    @use "/src/assets/css/cms.css"; 
</style>
<template>
    <div class="row mb-5">
        <div class="column">画像</div>
        <div class="col-md-8 image-area">
            <form action="/upload" class="dropzone" id="my-awesome-dropzone">
                <div class="dz-default dz-message">
                    <button class="dz-button" type="button">
                        <img src="/src/assets/image/picture.svg" alt="">
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>