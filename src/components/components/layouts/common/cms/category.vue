<style lang="scss" scoped>
    @use "/src/assets/css/cms.css"; 
</style>
<template>
    <div class="row mb-3  categorys">
        <div class="column">カテゴリ選択</div>
        <div class="col-md-8 row">
            <div class="mb-3 col-md-4 ">
                <select name="" id="" class="form-select">
                    <option value="">庭木剪定</option>
                    <option value="">消毒</option>
                </select>
            </div>
            <div class="add-button">
                <img src="/src/assets/image/square_plus_icon.svg" id="add">
            </div>
        </div>
    </div>
    <div class="row mb-4  categorys">
        <div class="column">選択済カテゴリ</div>
            <div class="col-md-8 row">
                <div class="category">
                    <div class="row mb-3">
                        <p class="w-auto">庭木剪定</p>
                        <div class="w-auto">
                            <img src="/src/assets/image/square_minus_icon.svg" id="add">
                        </div>
                    </div>
                </div>
                <div class="category">
                    <div class="row mb-3">
                        <p class="w-auto">消毒</p>
                        <div class="w-auto">
                            <img src="/src/assets/image/square_minus_icon.svg" id="add">
                        </div>
                    </div>
                </div>
                <div class="category">
                    <div class="row mb-3">
                        <p class="w-auto">庭木剪定</p>
                        <div class="w-auto">
                            <img src="/src/assets/image/square_minus_icon.svg" id="add">
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>