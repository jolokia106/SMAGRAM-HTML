<style lang="scss" scoped>
    @use "/src/assets/css/style.css";
</style>
<script setup>
    import confirmModal from '@/components/components/layouts/modal/confirm.vue';
</script>
<template>
    <div class="content-title">
        <h5>カテゴリマスタ詳細</h5>
    </div>

    <div class="content-body">
        <form action="/categories/list" method="GET">
            <div class="content-body-title">
                <h5>カテゴリ情報</h5>
            </div>


            <div class="row mb-3 col-md-6">
                <div class="column">大カテゴリ</div>
                <div class="col-md-6">
                    <select class="form-select" id="largeCategory">
                        <option value="1">カテゴリ新規作成</option>
                        <option value="">大カテゴリ1</option>
                        <option value="">大カテゴリ2</option>
                        <option value="">大カテゴリ3</option>
                        <option value="">大カテゴリ4</option>
                        <option value="">大カテゴリ5</option>
                        <option value="">大カテゴリ6</option>
                    </select>
                </div>
            </div>

            <div class="row mb-3 col-md-6" id="newCategory">
                <div class="column">新規作成</div>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="大カテゴリ名">
                </div>
            </div>

            <div class="row mb-3 col-md-6">
                <div class="column">小カテゴリ名</div>
                <div class="col-md-6">
                    <input type="text" class="form-control">
                </div>
            </div>


            <div class="mt-5 buttons">
                    <input type="button" class="btn btn-orive" value="登録" data-bs-toggle="modal" data-bs-target="#confirmModal">
                    <input type="button" class="btn btn-orive" value="削除" data-bs-toggle="modal" data-bs-target="#deleteModal">
            </div>

            <!-- モーダル -->
            <confirmModal />

        </form>
    </div>



</template>


<script scoped>
    $(function(){
        $('#largeCategory').on('change', function(){
            if($(this).val() == 1){
                $('#newCategory').show();
            }else{
                $('#newCategory').hide();
            }
        });

    });
</script>