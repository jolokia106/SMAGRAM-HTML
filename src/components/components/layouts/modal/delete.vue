<template>
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                    <div class="container-fluid">
   
                       <p class="mt-3 mb-5 text-center">登録済みの情報を削除します。</p>
                        <div class="col-12 text-center mb-2 search-submit">
                            <input type="submit" class="btn btn-orive col-12" value="OK">
                        </div>
                        <div class="text-center cancel" data-bs-dismiss="キャンセル">
                            <a href="javascript:void(0)" data-bs-dismiss="modal" aria-label="Close">キャンセル</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>