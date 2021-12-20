import '../sideBar/sideBar.css'
import {Link} from 'react-router-dom'

export default function SideBar() {
    return (
        <div className="BodyMenu">
            <div className="News">
                <i class="far fa-newspaper"></i>
                <p>
                    <Link to="/Home/News" style={{color:"white"}}>Tin tức</Link>
                </p>
            </div>
            <div className="AreaMana">
                <i class="fas fa-tasks"></i>
                <p>
                    <Link to="/Home/AreaManagement" style={{color:"white"}}>Quản lý khu vực</Link>
                </p>
            </div>
            <div className="AccessMana">
                <i class="far fa-user-circle"></i>
                <p>
                    <Link to="/Home/AcessManagement" style={{color:"white"}}>Quản lý truy cập</Link>
                </p>
            </div>
            <div className="Analysis">
                <i class="fas fa-chart-line"></i>
                <p>
                    <Link to="/Home/Analysis" style={{color:"white"}}>Phân tích dữ liệu</Link>
                </p>
            </div>
            <div className="LookUp">
                <i class="fas fa-search"></i>
                <p>
                    <Link to="/Home/LookUp" style={{color:"white"}}>Tra cứu</Link>
                </p>
            </div>
            <div className="List">
                <i class="fas fa-database"></i>
                <p>
                    <Link to="/Home/ListData" style={{color:"white"}}>Danh sách</Link>
                </p>
            </div>
            <div className="InputData">
                <i class="far fa-edit"></i>
                <p>
                    <Link to="/Home/InputData" style={{color:"white"}}>Nhập liệu</Link>
                </p>
                </div>
            </div>
    )
}
