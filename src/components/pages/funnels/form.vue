
<script setup>
    import confirmView from '@/components/components/layouts/modal/confirm.vue';
    import deleteView from '@/components/components/layouts/modal/delete.vue';
</script>
<template>
    <div class="content-title">
        <h5>加盟店ファネルマスタ管理</h5>
    </div>

    <div class="content-body">
        <div class="content-body-title">
            <h5>加盟店ファネル作成</h5>
        </div>
        <div class="container pr-areas">
            <form action="/funnels" method="GET">

                <div class="row">
                    <div class="row mb-3 col-md-6 pe-0">
                        <div class="column">対象事業</div>
                        <div class="col-md-6 grow-1">
                            <select name="" id="" class="form-select">
                                <option value="">smileガーデン</option>
                                <option value="">smileエクステリア</option>
                                <option value="">植木市場</option>
                                <option value="">GARDEM-JOB</option>
                                <option value="">お庭の達人</option>
                                <option value="">ガーデンビジネス協会</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button type="button" class="btn btn-orive ms-1 sp-wide mb-2">表示</button>
                    </div>
                </div>

                <div class="row">
                    <div class="row mb-5 col-md-6">
                        <div class="column">名称</div>
                        <div class="col-md-6 grow-1">
                            <input type="text" class="form-control" id="funnelName">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input type="button" class="btn btn-orive" value="追加" data-bs-toggle="modal" data-bs-target="#confirmModal">
                    </div>
                </div>
                    
                <div class="mb-3 col-md-6 pe-0 funnel-area" id="funnelArea">
                    <div class="column">登録済ファネル</div>
                    <div class="funnel-items mx-3" id="funnelItems">
                        <div class="funnel-item row">
                            <p>問合せ日</p> 
                            <div class="w-auto funnelRemove">
                                <img src="/src/assets/image/square_minus_icon.svg">
                            </div>
                        </div>
                        <div class="funnel-item row">
                            <p>初回対応日</p> 
                            <div class="w-auto funnelRemove">
                                <img src="/src/assets/image/square_minus_icon.svg">
                            </div>
                        </div>
                        <div class="funnel-item row">
                            <p>検討申請書返却日</p> 
                            <div class="w-auto funnelRemove">
                                <img src="/src/assets/image/square_minus_icon.svg">
                            </div>
                        </div>
                        <div class="funnel-item row">
                            <p>申請書受領通知日</p> 
                            <div class="w-auto funnelRemove">
                                <img src="/src/assets/image/square_minus_icon.svg">
                            </div>
                        </div>
                    </div>
                </div>    

                <!-- 確認モーダル -->
                <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="modal-body">
                                <div class="container-fluid">
            
                                <p class="mt-3 mb-5 text-center">入力した内容を登録します。</p>
                                    <div class="col-12 text-center mb-2 search-submit">
                                        <input type="button" id="submitBtn" class="btn btn-orive col-12" value="OK"  data-bs-dismiss="modal" aria-label="Close">
                                    </div>
                                    <div class="text-center cancel" data-bs-dismiss="キャンセル">
                                        <a href="javascript:void(0)" data-bs-dismiss="modal" aria-label="Close">キャンセル</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 削除モーダル -->
                <deleteView />
            </form>
        </div>
    </div>

    <!-- 複製用 -->
    <!-- smileガーデン -->
    <div class="mx-3" style="display: none;" id="originalSG">
        <div class="funnel-item">問合せ日</div>
        <div class="funnel-item">初回対応日</div>
        <div class="funnel-item">検討申請書返却日</div>
        <div class="funnel-item">申請書受領通知日</div>
    </div>
    <!-- smileガーデンその他  -->
    <div class="mx-3" style="display: none;" id="originalOther">
        <div class="funnel-item">問合せ日</div>
        <div class="funnel-item">初回対応日</div>
        <div class="funnel-item">検討申請書返却日</div>
        <div class="funnel-item">申請書受領通知日</div>
    </div>

</template>

<script>
    $(function(){

        $('#submitBtn').on('click', function(){
            if($('#funnelName').val()){
                var item = $('<div>', { class:'funnel-item row'});
                var p = $('<p>', { text: $('#funnelName').val() });
                var imgDiv = $('<div>', { class:'w-auto funnelRemove'});
                var img = $('<img>', { src: '/src/assets/image/square_minus_icon.svg'});
                item.append(p);
                imgDiv.append(img);
                item.append(imgDiv);
                $('#funnelItems').append(item);
            }
        });

        $(document).on('click', '.funnelRemove', function(){
            $(this).parent().remove();
        });
        
        
    });
</script>