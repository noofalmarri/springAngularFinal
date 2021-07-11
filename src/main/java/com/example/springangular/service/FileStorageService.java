package com.example.springangular.service;

import com.example.springangular.entity.FileDB;
import com.example.springangular.repository.FileDBRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;

@Service
public class FileStorageService {

    @Autowired
    private FileDBRepository fileDBRepository;

    public FileDB store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FileDB FileDB = new FileDB(fileName,file.getContentType(), file.getBytes());
        System.out.println(FileDB);

        return fileDBRepository.save(FileDB);
    }

    public FileDB getFile(int id) {
        return fileDBRepository.findById(id).get();
    }

    public Stream<FileDB> getAllFiles() {
        return fileDBRepository.findAll().stream();
    }

    public List<FileDB> getAllfiledb(){
        return fileDBRepository.findAll();
    }

}