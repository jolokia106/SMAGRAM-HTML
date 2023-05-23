<template>

    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>種別</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">問い合わせ</option>
                <option value="2">資料DM</option>
                <option value="3">FAXDM</option>
                <option value="4">電話営業</option>
                <option value="5">未実施</option>
                <option value="6">その他</option>
                <option value="7">紹介</option>
                <option value="8">メールDM</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>リスト獲得手段</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">smile造園BP募集</option>
                <option value="2">smileプチ庭BP募集</option>
                <option value="3">植木市場加盟店募集LP</option>
                <option value="4">植木市場AR代理店LP</option>
                <option value="5">植木市場ARPRO利用者LP</option>
                <option value="6">GARDEN-JOB掲載企業募集LP</option>
                <option value="7">GARDEN-JOB資料請求LP</option>
                <option value="8">ハローワーク</option>
                <option value="9">Indeed</option>
                <option value="10">タウンページ</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>紹介者名</label>
        </div>
        <div class="col-auto">
            <input type="text" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>資料送付有無</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>正式契約日</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>正式オープン日</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-7 col-form-label">
            <label>①問合わせ日（受付日）</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="col">
        <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-7 col-form-label">
            <label>②初回対応日（本日→希望者）</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="col">
        <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-7 col-form-label">
            <label>③検討申請書返却日（希望者→本部）</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="col">
        <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-7 col-form-label">
            <label>④申請書受領通知日（本部→希望者）</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="col">
        <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-7 col-form-label">
            <label>⑤審査結果通知日（本部→希望者）</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="col">
        <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-7 col-form-label">
            <label>⑥-1契約意向返信日（希望者→本部）</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="col">
        <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-7 col-form-label">
            <label>⑥-2失注意向返信日（希望者→本部）</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="col">
        <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-7 col-form-label">
            <label>⑥-3保留意向返信日（希望者→本部）</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="col">
        <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-7 col-form-label">
            <label>⑦-1請求書発行（本部）</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="col">
        <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-7 col-form-label">
            <label>⑦-2入金確認（本部）</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="col">
        <input type="text" class="form-control" aria-label="Text input with radio button">
    </div>

</template>