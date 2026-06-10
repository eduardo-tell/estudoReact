import { useRef } from "react";
import { useSelector } from "react-redux";
import './styles.scss';
import ButtonCount from "../buttonCount/ButtonCount";

export default function Cart() {
  const cartProducts = useSelector(state => state.cartProducts)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)


  return (
    <>
      <ButtonCount url="/carrinho" count={cartProducts?.length} name="Carrinho" />

        <div id="CartDrawer" ref={dialogRef} className="hdt-dialog hdt-dialog-drawer hdt-dialog-drawer--cart hdt-mini-cart focus-none" data-scroll-lock pos="right" open style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
          <div className="hdt-dialog-drawer__header">
            <h3 className="hdt-mini-cart__header-title hdt-text-lg hdt-font-medium">Your cart</h3>
            <button ref={closeButtonRef} className="hdt-s-text hdt-dialog-btn__close" aria-controls="CartDrawer" aria-label="Close">
              <svg part="hdt-close-icon" className="hdt-icon hdt-icon-close" role="presentation" fill="none" focusable="false" width="16" height="14" viewBox="0 0 16 14">
                <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none"></path>
              </svg>
            </button>
          </div>
          <div className="hdt-dialog-drawer__inner" color-scheme="scheme-e0b73555-c767-4eda-aa6d-4e44e10aefce">
            <div className="hdt-mini-cart__wrap hdt-flex hdt-flex-col">
              <div className="hdt-mini-cart__main hdt-relative">
                <div data-hdt-scroll-me="" className="hdt-mini-cart__sroll hdt-current-scrollbar hdt-full-width-link" aria-label="link">
                  <div className="hdt-mini-cart__items hdt-ratio--adapt_image">
                    <form action="/cart" id="CartDrawer-Form" method="POST">
                      {cartProducts?.map(cartProduct => {
                        return (
                            <div key={cartProduct.id} className="hdt-mini-cart__item hdt-cart-item hdt-flex hdt-relative hdt-oh hdt-line-item">
                              <div className="hdt-quantity--error hdt-form-message--error">
                                <svg aria-hidden="true" focusable="false" className="hdt-icon hdt-icon-error" width="15" height="15" viewBox="0 0 13 13">
                                  <circle cx="6.5" cy="6.50049" r="5.5" stroke="white"></circle>
                                  <circle cx="6.5" cy="6.5" r="5.5" fill="currentColor" stroke="currentColor"></circle>
                                  <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"></path>
                                  <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="currentColor"></path>
                                </svg>
                                <span className="hdt-error-message">The quantity you selected is not available.</span>
                              </div>
                              <div className="hdt-mini-cart__image">
                                <a href="/products/ninebot-mini-pro?variant=47130213548288" className="hdt-mini-cart__img hdt-block hdt-relative hdt-oh hdt-ratio" style={{ '--aspect-ratioapt': '0.9975' }}>
                                  <img src="" alt="" width="1197" height="1200" loading="lazy" sizes="(max-width: 767px) 80px, 160px" />
                                </a>
                              </div>
                              <div className="hdt-mini-cart__info hdt-s-text hdt-relative hdt-oh">
                                <a href="/products/ninebot-mini-pro?variant=47130213548288" className="hdt-mini-cart__title hdt-truncate hdt-block hdt-s-text hdt-font-medium">Ninebot Mini Pro</a>
                                <div className="hdt-mini-cart__price">
                                  <div className="hdt-price__item hdt-price__list hdt-price-wrapp">
                                    <div className="hdt-price">
                                      <span className="hdt-money">£303.00</span>
                                    </div>
                                  </div>
                                </div>
                                <ul className="hdt-mini-cart_meta_propertyList"></ul>
                                <div className="hdt-mini-cart__actions">
                                  <div className="hdt-flex hdt-align-center hdt-justify-start">
                                    <div inner="" placement="top" style={{ marginInlineEnd: '10px' }}>
                                      <div className="hdt-inline-flex hdt-align-center" data-index="1" form="id:CartDrawer-Form">
                                        {/* <a href="/cart/change?line=1&amp;quantity=0" className="hdt-mini-cart__remove hdt-s-text">
                                          <svg viewBox="0 0 24 24" width="17">
                                            <use href="#icon-cart-remove"></use>
                                          </svg>
                                          <span className="sr-only">Remove item</span>
                                        </a> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        )
                      })}
                    </form>
                  </div>
                </div>
              </div>
              <div className="hdt-mini-cart__bottom">
                <div className="hdt-mini-cart__bottom-wrap">
                  <div className="hdt-cart-totals-discounts">
                    <div className="hdt-mini-cart__totals hdt-flex hdt-align-center hdt-justify-between hdt-totals" role="status">
                      <h3 className="hdt-totals__total hdt-mini-cart__total hdt-text-xl hdt-font-semibold">Subtotal</h3>
                      <span className="hdt-totals__total-value hdt-mini-cart__value hdt-text-xl hdt-s-text hdt-font-semibold hdt-money">£645.05 GBP</span>
                    </div>
                  </div>
                  <button form="CartDrawer-Form" type="submit" data-loading-bar="" name="checkout" className="hdt-mini-cart__btn-checkout hdt-button-block hdt-btn hdt-font-semibold hdt-btn-full-width  ">Check out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
