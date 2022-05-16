import React from 'react'
import "./list_artist.css";

const ListArtist = () => {
  return (
    <div className="home-contaier__grid-table">
      <table>
        <tbody>
          <tr>
            <td>#1</td>
            <td className="grid-table__image">
              <a href="./artist-details.html">
                <img src="https://vnn-imgs-f.vgcloud.vn/2020/11/25/08/bui-anh-tuan-cover-love-song-tang-sinh-nhat-thay-ho-ngoc-ha.jpg" alt />
              </a>
            </td>
            <td><a href="./artist-details.html">Bùi Anh Tuấn</a></td>
            <td>09/09/1991</td>
            <td>Male</td>
            <td>Singer</td>
            <td><i className="bx bx-heart" /> 1000</td>
          </tr>
          <tr>
            <td>#2</td>
            <td className="grid-table__image">
              <img src="https://kenh14cdn.com/203336854389633024/2022/5/5/7dddeba4-553e-4dc3-be90-205779b33f5b-1629856734-80-width650height975-1651749777718449863634.jpg" alt />
            </td>
            <td>Sơn Tùng MTP</td>
            <td>05/07/1994</td>
            <td>Male</td>
            <td>Singer / Composer</td>
            <td><i className="bx bx-heart" /> 999</td>
          </tr>
          <tr>
            <td>#3</td>
            <td className="grid-table__image">
              <img src="https://vnn-imgs-f.vgcloud.vn/2019/06/05/11/phan-manh-quynh-mv-moi-la-cau-chuyen-that-cua-toi-va-ban-gai-1.jpg" alt />
            </td>
            <td>Phan Mạnh Quỳnh</td>
            <td>10/01/1990</td>
            <td>Male</td>
            <td>Singer / Composer</td>
            <td><i className="bx bx-heart" /> 888</td>
          </tr>
          <tr>
            <td>#4</td>
            <td className="grid-table__image">
              <img src="https://nld.mediacdn.vn/291774122806476800/2021/8/20/fandom-bi-che-tre-con-jack-len-tieng-benh-vuc-nhung-cdm-ca-khia-9479334a-16294215414001534738808.jpg" alt />
            </td>
            <td>J97</td>
            <td>12/04/1997</td>
            <td>Male</td>
            <td>Singer / Composer</td>
            <td><i className="bx bx-heart" /> 777</td>
          </tr>
          <tr>
            <td>#5</td>
            <td className="grid-table__image">
              <img src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/06/27/e/8/8/5/1530074198530_600.jpg" alt />
            </td>
            <td>Hà Anh Tuấn</td>
            <td>17/12/1984</td>
            <td>Male</td>
            <td>Singer</td>
            <td><i className="bx bx-heart" /> 666</td>
          </tr>
          <tr>
            <td>#6</td>
            <td className="grid-table__image">
              <img src="https://nld.mediacdn.vn/2018/2/3/13-chot-15176700723471428987902.jpg" alt />
            </td>
            <td>Mỹ Tâm</td>
            <td>16/01/1981</td>
            <td>Female</td>
            <td>Singer</td>
            <td><i className="bx bx-heart" /> 555</td>
          </tr>
          <tr>
            <td>#7</td>
            <td className="grid-table__image">
              <img src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/11/17/2575098114530102028585373185848124102809313n-1637124743385736038805.jpeg" alt />
            </td>
            <td>Karik</td>
            <td>12/04/1989</td>
            <td>Male</td>
            <td>Singer</td>
            <td><i className="bx bx-heart" /> 444</td>
          </tr>
          <tr>
            <td>#8</td>
            <td className="grid-table__image">
              <img src="https://media.2dep.vn/upload/thucquyen/2021/07/30/chi-dan-la-ai-chang-ca-si-dien-trai-so-huu-loi-nhac-bi-che-kem-sang-1627641135-12.jpg" alt />
            </td>
            <td>Chi Dân</td>
            <td>02/06/1989</td>
            <td>Male</td>
            <td>Singer</td>
            <td><i className="bx bx-heart" /> 333</td>
          </tr>
          <tr>
            <td>#9</td>
            <td className="grid-table__image">
              <img src="https://menback.com/wp-content/uploads/2021/05/hoan-hao-lyrics-bray.jpeg" alt />
            </td>
            <td>Bray</td>
            <td>11/10/1993</td>
            <td>Male</td>
            <td>Singer</td>
            <td><i className="bx bx-heart" /> 222</td>
          </tr>
          <tr>
            <td>#10</td>
            <td className="grid-table__image">
              <img src="https://nld.mediacdn.vn/291774122806476800/2022/1/23/trinh-thang-binh-tap-luyen-cho-3432-6072-1641460737-1642900967916495747825.jpg" alt />
            </td>
            <td>Trịnh Thăng Bình</td>
            <td>30/04/1988</td>
            <td>Male</td>
            <td>Singer / Composer</td>
            <td><i className="bx bx-heart" /> 111</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default ListArtist;

