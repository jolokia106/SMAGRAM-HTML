<template>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>ステータス</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">見込</option>
                <option value="2">正式</option>
                <option value="3">失注</option>
            </select>
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>終了日</label>
        </div>
        <div class="col-auto">
            <input type="date" class="form-control" aria-label="Text input with radio button">
        </div>
    </div>
    <div class="row mb-1 d-flex align-items-center">
        <div class="col-sm-4 col-form-label">
            <label>終了理由</label>
        </div>
        <div class="col-auto">
            <select class="form-select">
                <option value="1">スキル不足</option>
                <option value="2"></option>
            </select>
        </div>
    </div>


</template>