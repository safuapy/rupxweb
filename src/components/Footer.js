import React from 'react';

function Footer() {
  return (
    <footer class="text-center py-4">
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-3">
          <div class="col">
            <p class="text-muted my-2">Copyright © 2023 Rupaya</p>
          </div>
          <div class="col">
            <ul class="list-inline my-2">
              <li class="list-inline-item me-4"></li>
              <li class="list-inline-item me-4">
                <a href="https://twitter.com/rupayacoin" target="_blank">
                  <div class="bs-icon-circle bs-icon-primary bs-icon">
                    <svg class="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li class="list-inline-item"></li>
            </ul>
          </div>
          <div class="col">
            <ul class="list-inline my-2">
              <li class="list-inline-item"><a class="link-secondary" href="https://rr.noordstar.me/6819ff81">Privacy Policy</a></li>
              <li class="list-inline-item"><a class="link-secondary" href="https://rr.noordstar.me/6819ff81">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
