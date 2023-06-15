<template>
    <div class="content-title">
        <h5>備品資材詳細</h5>
    </div>

    <div class="content-body">
        <div class="content-body-title">
            <h5>備品資材情報</h5>
        </div>
        <div class="container">
            <form action="/materials/list" method="GET">
                <div class="row">
                    <div class="row mb-3 col-md-6">
                        <div class="column">購入BP店名</div>
                        <div class="col-md-6">
                            <select name="" id="" class="form-select">
                                <option value="">加盟店１</option>
                                <option value="">加盟店２</option>
                                <option value="">加盟店３</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3 col-md-6">
                        <div class="column">購入日</div>
                        <div class="col-md-6"><input type="date" class="form-control"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-6">
                        <div class="column">支払方法</div>
                        <div class="col-md-6">
                            <select name="" id="" class="form-select">
                                <option value="">クレジット</option>
                                <option value="">銀行振込</option>
                                <option value="">相殺</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3 col-md-6">
                        <div class="column">備考</div>
                        <div class="col-md-6"><input type="text" class="form-control"></div>
                    </div>
                </div>



                <div class="items" id="items">
                    <div class="item" id="item_1">
                        <div class="row mb-3">
                            <div class="column">商品名<span class="item_num">1</span></div>
                            <div class="col-md-3"><input type="text" class="form-control"></div>
                        </div>
                        <div class="row">
                            <div class="row mb-3 col-md-4 item-div">
                                <div class="column">購入金額</div>
                                <div class="number"><input type="text" class="form-control num-input buy-amount"></div>
                            </div>
                            <div class="row mb-3 col-md-4 item-div">
                                <div class="column">購入数</div>
                                <div class="number"><input type="text" class="form-control num-input buy-num"></div>
                            </div>
                            <div class="row mb-3 col-md-4 item-div">
                                <div class="column">送料</div>
                                <div class="number"><input type="text" class="form-control num-input buy-postage"></div>
                            </div>
                        </div>


                        <div class="row mb-3">
                            <div class="column">原価</div>
                            <div class="number"><input type="text" class="form-control"></div>
                        </div>
                        <div class="row mb-3">
                            <div class="column">仕入先</div>
                            <div class="col-md-3">
                                <select name="" id="" class="form-select">
                                    <option value="">仕入先１</option>
                                    <option value="">仕入先２</option>
                                    <option value="">仕入先３</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="add-buttons">
                    <img src="/src/assets/image/square_plus_icon.svg" id="add">
                    <img src="/src/assets/image/square_minus_icon.svg" id="remove">
                </div>

                <div class="row mb-3">
                    <div class="column">合計金額</div>
                    <div class="number"><input type="text" class="form-control" id="total"></div>
                </div>


                <div class="row">
                    <div class="row mb-3 col-md-6">
                        <div class="column">入金日</div>
                        <div class="col-md-8"><input type="date" class="form-control"></div>
                    </div>
                    <div class="row mb-3 col-md-6">
                        <div class="column">ステータス</div>
                        <div class="col-md-8">
                            <select name="" id="" class="form-select">
                                <option value="">本部確認中</option>
                                <option value="">入金待</option>
                                <option value="">入金済</option>
                                <option value="">キャンセル</option>
                                <option value="">発注済</option>
                                <option value="">発送済</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-6">
                        <div class="column">相殺</div>
                        <div class="col-md-8">
                            <input type="checkbox" value="1" checked="checked" id="offset">
                            <label for="offset" class="checkbox offset"></label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="row mb-3 col-md-6">
                        <div class="column">キャンセル理由</div>
                        <div class="col-md-8"><textarea class="form-control"></textarea></div>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <input type="submit" class="btn btn-orive" value="登録">
                </div>
            </form>
        </div>
    </div>

    <!-- 複製用 -->
    <div class="" id="original" style="display:none;">
        <div class="row mb-3">
            <div class="column">商品名<span class="item_num"></span></div>
            <div class="col-md-3"><input type="text" class="form-control"></div>
        </div>
        <div class="row">
            <div class="row mb-3 col-md-4 item-div">
                <div class="column">購入金額</div>
                <div class="number"><input type="text" class="form-control num-input buy-amount"></div>
            </div>
            <div class="row mb-3 col-md-4 item-div">
                <div class="column">購入数</div>
                <div class="number"><input type="text" class="form-control num-input buy-num"></div>
            </div>
            <div class="row mb-3 col-md-4 item-div">
                <div class="column">送料</div>
                <div class="number"><input type="text" class="form-control num-input buy-postage"></div>
            </div>
        </div>


        <div class="row mb-3">
            <div class="column">原価</div>
            <div class="number"><input type="text" class="form-control"></div>
        </div>
        <div class="row mb-3">
            <div class="column">仕入先</div>
            <div class="col-md-3">
                <select name="" id="" class="form-select">
                    <option value="">仕入先１</option>
                    <option value="">仕入先２</option>
                    <option value="">仕入先３</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    $(function(){
        var items = $('#items');
        var i = 2;
        console.log($(".item").length);
        console.log($(".item").length > 1);
        if($(".item").length == 1){
            $('#remove').hide();
        }

        $('#add').on('click',function(){
            var item = $('#original').clone(true);
            item.find('.item_num').text(i);
            item.show();
            item.addClass('item');
            item.attr('id', '');
            items.append(item);
            $('#remove').show();
            i++;
        });
        $('#remove').on('click',function(){
            $($(".item")[$(".item").length-1]).remove(); 
            if($(".item").length == 1){
                $('#remove').hide();
            }
            i--;
            changeTotal();
        });

        $('.num-input').on('change', function(){
            changeTotal();
        });

        function changeTotal(){
            var price = 0;
            $('.item').each(function(index) {
                if($(this).find('.buy-amount').val() && $(this).find('.buy-num').val() && $(this).find('.buy-postage').val()){
                    price += ( Number($(this).find('.buy-amount').val()) * Number($(this).find('.buy-num').val()) ) + Number($(this).find('.buy-postage').val());
                }
            });
            $('#total').val(price);
        }
        
    });
</script>