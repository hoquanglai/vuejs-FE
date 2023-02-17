<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row" style="padding-right: 30px; padding-left;: 30px">
    <div class="col-xl-1 center">
      <img src="../image/logo.png" />
    </div>
    <div class="col-xl-11">
      <div class="row">
        <div class="col-xl-12 right">
          <div style="padding: 6px">
            <div class="p-inputgroup" style="height: 30px; padding-right: 30px">
              <InputText
                class="p-inputtext-xs"
                placeholder="Nhập SĐT để nhận ưu đãi"
                style="box-shadow: none"
              />
              <Button
                icon="pi pi-search"
                class="p-button-xs"
                style="
                  box-shadow: none;
                  border-radius: 0 !important;
                  border: none;
                  background-color: #011769;
                "
              />
            </div>
          </div>
          <div style="padding-right: 30px">
            <i
              class="pi pi-inbox text-color-011769"
              style="font-size: 1rem; margin-right: 5px"
            ></i>
            <b class="text-color-BE9355"> tư vấn</b>
          </div>
          <div>
            <i
              class="pi pi-phone text-color-011769"
              style="font-size: 1rem; margin-right: 5px"
            ></i>
            <b class="text-color-BE9355"> 0916594249</b>
          </div>
        </div>
      </div>
      <hr style="width: 100%; text-align: left; margin: 0px" />
      <div class="row">
        <div class="col-xl-6 left">
          <div class="">
            <nav class="navbar navbar-expand-lg navbar-light">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <i
                  class="pi pi-home text-color-011769"
                  style="font-size: 1.1rem; margin-right: 5px"
                ></i>
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">CHUNG CƯ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">THẤP TẦNG</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >SẮP BÁN</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >DỰ ÁN</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">TIN TỨC</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div class="col-xl-6 right">
          <div style="margin-right: 35px">
            <b class="text-color-BE9355">SƠ ĐỒ PHÂN LÔ</b>
          </div>
          <div>
            <b class="text-color-BE9355" style="margin-right: 15px"
              >BẢN GIÁ TRỰC TUYẾN</b
            >
          </div>
          <div style="padding-right: 5px">
            <b class="text-color-011769" style="margin-right: 15px"
              >Hồ Quang Lai</b
            >
            <i
              class="pi pi-user text-color-011769"
              style="font-size: 1rem; margin-right: 20px"
            ></i>
          </div>
          <div>
            <i
              class="pi pi-cart-plus text-color-011769"
              style="font-size: 1.1rem; margin-right: 5px"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  data() {
    return {};
  },
};
</script>
