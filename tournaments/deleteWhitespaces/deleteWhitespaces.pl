#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub deleteWhitespaces {
    my ($inputStr) = @_;

    $inputStr =~ s/(\s)//g;

    return $inputStr;
}
