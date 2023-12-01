# Tưới SoFund Codebase

## Front-end

- UI/UX: Coi như gần xong
- JS: Thực hiện dần

## Back-end

- SQL DB: MariaDB 10.11 (schema có type UUID, chỉ tương thích với 10.7)
- Back-end code: Chắc Java
- Payment: [API MoMo](https://developers.momo.vn/v3/docs/payment/guides/aio-payment-links)
- Diễn đàn: [Disqus Comment System](https://support.haravan.com/support/solutions/articles/42000087481-c%C3%A0i-%C4%91%E1%BA%B7t-v%C3%A0-c%E1%BA%A5u-h%C3%ACnh-disqus-comment-system)
- Users: [Google Sign In](https://developers.google.com/identity)

## Dependencies

- tailwindcss
- postcss
- autoprefixer
- react-router-dom
- react-markdown
- prop-types

## Commands

### Back-end

```
sudo systemctl start mariadb.service
```

### Front-end

Test:

```
npm run dev
```

Chạy trong browser và hot reload.

Build:

```
npm run build
```

Thả index.html và đồng bọn vào nơi nào trên code server.