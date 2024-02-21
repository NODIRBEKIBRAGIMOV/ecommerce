<template>
    <div class="elementor-section">
        <div class="elementor-title">
            <h3>Ommabop</h3>
            <RouterLink to="/katalog">
                <a href="#">Hammasini ko'rish</a>
            </RouterLink>
        </div>
        <!-- <div class="card">
            <ElementorCard />
            <ElementorCard />
            <ElementorCard />
            <ElementorCard />
        </div> -->
        <swiper :spaceBetween="30" :hashNavigation="{ watchState: true, }" :pagination="{ clickable: true, }"
            :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide data-hash="slide1" class="slide">
                <div class="elementor-card media-card1" v-motion-slide-visible-once-left>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC00597-%E2%80%94-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-213x300.jpg"
                            alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Tufli 85-018-11 Nagiz o'rilgan zumrad</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>1500₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
                <div class="elementor-card media-card2" v-motion-slide-visible-once-top>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC07827-234x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Tufli 85-015-04 bej kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>900₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
                <div class="elementor-card" v-motion-slide-visible-once-right>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC07644-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Etik 82-010-01 qora kigiz + haqiqiy teri</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>7 490₽</s> 6 490₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
                <div class="elementor-card" v-motion-slide-visible-once-bottom>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC07439-%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82-225x300.jpg"
                            alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Valenki 82-002-11 Zumrad kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>5 490₽</s> 4 500₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide2" class="slide">
                <div class="elementor-card media-card1" v-motion-slide-visible-once-left>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/82-002-03-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Valenki 82-002-03 Halva kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>5 490₽</s> 4 500₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
                <div class="elementor-card media-card2" v-motion-slide-visible-once-right>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC00129-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Kigiz etik 11-13-01 qora kigiz + nat teri</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>5 490₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
                <div class="elementor-card" v-motion-slide-visible-once-left>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC06935-1-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Kigiz etik 11-11-13 t.ko'k kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>4 990₽</s> 3 300₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
                <div class="elementor-card" v-motion-slide-visible-once-right>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC00525-214x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Valenki 11-11-04 milliy bezak bej kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>5 990₽</s> 4 900₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>36</option>
                                <option>37</option>
                                <option>38</option>
                                <option>40</option>
                                <option>41</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide3" class="slide slide2">
                <div class="elementor-card" v-motion-slide-visible-once-left>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/82-002-03-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Valenki 82-002-03 Halva kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>5 490₽</s> 4 500₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
                <div class="elementor-card" v-motion-slide-visible-once-right>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC00129-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Kigiz etik 11-13-01 qora kigiz + nat teri</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>5 490₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide4" class="slide slide2">
                <div class="elementor-card" v-motion-slide-visible-once-left>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC00597-%E2%80%94-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-213x300.jpg"
                            alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Tufli 85-018-11 Nagiz o'rilgan zumrad</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>1500₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
                <div class="elementor-card" v-motion-slide-visible-once-top>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC07827-234x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Tufli 85-015-04 bej kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>900₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <swiper :spaceBetween="30" :hashNavigation="{ watchState: true, }" :pagination="{ clickable: true, }"
            :navigation="true" :modules="modules" class="mySwiper mySwiper2">
            <swiper-slide data-hash="slide1" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-left>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC00597-%E2%80%94-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-213x300.jpg"
                            alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Tufli 85-018-11 Nagiz o'rilgan zumrad</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>1500₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide2" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-top>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC07827-234x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Tufli 85-015-04 bej kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>900₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide3" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-right>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC07644-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Etik 82-010-01 qora kigiz + haqiqiy teri</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>7 490₽</s> 6 490₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide4" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-bottom>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC07439-%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82-225x300.jpg"
                            alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Valenki 82-002-11 Zumrad kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>5 490₽</s> 4 500₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide5" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-left>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/82-002-03-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Valenki 82-002-03 Halva kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>5 490₽</s> 4 500₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide6" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-right>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC00129-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Kigiz etik 11-13-01 qora kigiz + nat teri</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>5 490₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide7" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-left>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC06935-1-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Kigiz etik 11-11-13 t.ko'k kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>4 990₽</s> 3 300₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide8" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-right>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC00525-214x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Valenki 11-11-04 milliy bezak bej kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>5 990₽</s> 4 900₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>36</option>
                                <option>37</option>
                                <option>38</option>
                                <option>40</option>
                                <option>41</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide9" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-left>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/82-002-03-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Valenki 82-002-03 Halva kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span><s>5 490₽</s> 4 500₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide10" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-right>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC00129-225x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Kigiz etik 11-13-01 qora kigiz + nat teri</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>5 490₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide12" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-left>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC00597-%E2%80%94-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-213x300.jpg"
                            alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Tufli 85-018-11 Nagiz o'rilgan zumrad</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>1500₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>37</option>
                                <option>38</option>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide data-hash="slide13" class="slide">
                <div class="elementor-card" v-motion-slide-visible-once-top>
                    <div class="card-img">
                        <img src="https://marevo.style/wp-content/uploads/2023/02/DSC07827-234x300.jpg" alt="">
                    </div>
                    <div class="card-details">
                        <div class="card-title">
                            <a href="#">
                                <h2>Tufli 85-015-04 bej kigiz</h2>
                            </a>
                        </div>
                        <div class="card-price">
                            <span>900₽</span>
                        </div>
                        <div class="card-variations">
                            <div class="card-variations-title">
                                <span>Hajmi</span>
                            </div>
                            <select>
                                <option>39</option>
                                <option>40</option>
                                <option>41</option>
                                <option>42</option>
                                <option>43</option>
                                <option>44</option>
                                <option>45</option>
                            </select>
                        </div>
                        <div class="card-add-to-cart">
                            <button>Savatchaga qo'shish </button>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import { Pagination, Navigation } from 'swiper/modules';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
}
</script>
<style scoped>
.elementor-section {
    margin: 142px auto 15px auto;
    padding: 0 60px 0 60px;
    width: 1520px;
    display: flex;
    flex-direction: column;
}

.elementor-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.elementor-title h3 {
    margin: 0 0 15px 25px;
    font-size: 55px;
    color: #2c2c2c;
}

.elementor-title a {
    margin: 0;
    display: none;
    color: #000;
}

.slide {
    display: flex;
    justify-content: center !important;
}

/* .card {
    width: 100%;
    background-color: rgb(54, 50, 50);
    display: flex;
    justify-content: center;
    flex-direction: row;
} */

.mySwiper {
    width: 100%;
    padding: 0 0 50px 0;
}

.mySwiper2 {
    display: none;
}

/* ...card start... */
.elementor-card {
    border: 1px solid #eee;
    width: 300px;
    height: 708px;
    margin: 0 15px;
    border-radius: 10px;
    background: #f5f7fd;
    overflow: hidden;
}

.card-img {
    height: 420px;
    width: 300px;
    overflow: hidden;
}

.elementor-card img {
    height: 100%;
    width: 100%;
    transform: scale(1.1);
}

.elementor-card img:hover {
    transform: scale(1.3);
    transition: all 1s;
}

/* ...card details... */
.card-details {
    width: 100%;
    margin: 25px 0 0 0;
    padding: 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.card-title {
    height: 50px;
}

.card-title a {
    text-decoration: none;
}

.card-title a h2 {
    color: black;
    margin: 0 0 10px 0;
    font-size: 18px;
    line-height: 1.2em;
    font-weight: 500;
}

.card-details .card-price span {
    color: #7DA2B4;
    font-size: 16px;
}

.card-variations .card-variations-title span {
    color: #707070;
    font-size: 15px;
}

.card-variations {
    width: 100%;
}

.card-variations select {
    width: 100%;
    border: 1px solid #7da2b4;
    padding: 10px;
}

.card-add-to-cart {
    width: 100%;
}

.card-add-to-cart button {
    width: 100% !important;
    padding: 10px;
    margin: 15px 0 0 0;
    border: none;
    font-size: 18px;
    font-weight: 600;
    color: white;
    background: #7da2b4;
}

.card-add-to-cart button:hover {
    border: 1px solid #7da2b4;
    color: #7da2b4;
    background: white;
}


.slide2 {
    display: none;
}











@media (max-width: 1520px) {
    .elementor-section {
        width: 100%;
    }
}

@media (max-width: 1440px) {
    .elementor-section {
        padding: 0 20px;
    }

    .elementor-card {
        height: auto;
    }

    .card-img {
        width: 100%;
        height: auto;
    }

    .card-img img {
        height: 350px;
    }
}

@media (max-width: 1025px) {
    .elementor-title h3 {
        font-size: 40px;
    }

    .elementor-title a {
        display: block;
        margin: 0 35px 0 0;
    }

    .elementor-section {
        padding: 0 15px 0 15px;
    }

    .elementor-card {
        height: auto;
        margin: 0 5px;
    }

    .card-img {
        width: 100%;
        height: 350px;
    }

    .card-img img {
        transform: scale(1) !important;
    }


    .media-card1 {
        display: none;
    }
}

@media (max-width: 765px) {

    .media-card2 {
        display: none;
    }

    .slide2 {
        display: flex;
    }
}

@media (max-width: 576px) {
    .mySwiper {
        display: none;
    }

    .mySwiper2 {
        display: block;
    }

    .elementor-card {
        width: 100%;
        display: flex;
        flex-direction: row !important;
        align-items: center;
    }

    .card-details {
        justify-content: space-around;
        height: 70%;
    }

    .card-add-to-cart button {
        margin: 0 !important;
    }
}

@media (max-width: 425px) {
    .elementor-card {
        flex-direction: column !important;
        padding: 10px 0 0 0;
        align-items: center;
    }

    .card-img {
        width: 80%;
        height: 250px;
    }

    .card-details {
        height: auto;
        margin: 0;
    }

    .card-add-to-cart button {
        margin: 5px 0 0 0 !important;
    }
}
</style>